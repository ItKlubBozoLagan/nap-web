import {
    ContestData,
    EducationCategory,
    processContestResults,
    RawContestDataEntry,
} from "@/lib/contestResults";

type SeasonConfig = {
    finalCall?: Record<EducationCategory, number>;
    roundCount: number;
};

export type Season = "2024/2025" | "2025/2026";

const SEASON_CONFIGS: Record<Season, SeasonConfig> = {
    "2024/2025": {
        finalCall: {
            elementary: 7,
            high: 15,
            university: 10,
        },
        roundCount: 5,
    },
    "2025/2026": {
        roundCount: 5,
    },
};

export const dataByContestsFromRaw = (season: Season, allResults: ContestData[]) => {
    const ALL_CONTESTS = allResults.map((it) => it.name);

    const peopleBlacklist = ["Višen Pavlica", "Kristijan Gašpar"];

    const DataByContests = Object.fromEntries(
        allResults.map(
            (
                { name, problems, data: rawData, solutionsUrl },
                _,
                __,
                data = rawData.filter((it) => !peopleBlacklist.includes(it.full_name)),
            ) => [
                    name,
                    {
                        problems,
                        solutionsUrl,
                        data: {
                            all: processContestResults(data),
                            elementary: processContestResults(
                                data.filter((it) => it.category === "elementary"),
                            ),
                            high: processContestResults(data.filter((it) => it.category === "high")),
                            university: processContestResults(
                                data.filter((it) => it.category === "university"),
                            ),
                        },
                    },
                ],
        ),
    );

    const collapseContestData = (category: EducationCategory | "all"): RawContestDataEntry[] => {
        const users: Record<string, RawContestDataEntry> = {};

        for (const [name, { data }] of Object.entries(DataByContests)) {
            const categoryData = data[category];

            for (const entry of categoryData) {
                if (!users[entry.full_name]) {
                    users[entry.full_name] = {
                        full_name: entry.full_name,
                        category: entry.category,
                        institution: entry.institution,
                        score: {},
                    };
                }

                users[entry.full_name].score[name] = entry.total;
            }
        }

        return Object.values(users);
    };

    const filterOutWorst = (data: RawContestDataEntry[]): RawContestDataEntry[] => {
        const defaultData = Object.fromEntries(ALL_CONTESTS.map((it) => [it, 0]));

        return data.map((entry) => {
            const [worst] = Object.entries(Object.assign({ ...defaultData }, entry.score)).sort(
                ([_, a], [__, b]) => a - b,
            )[0];

            return {
                ...entry,
                score: {
                    ...entry.score,
                    [worst]: null,
                },
            };
        });
    };

    const totalData = {
        problems: allResults.map((it) => it.name),
        solutionsUrl: undefined,
        data: {
            all: processContestResults(collapseContestData("all")),
            elementary: processContestResults(collapseContestData("elementary")),
            high: processContestResults(collapseContestData("high")),
            university: processContestResults(collapseContestData("university")),
        },
    };

    const seasonConfig = SEASON_CONFIGS[season];

    const totalDataWithoutWorst = {
        problems: allResults.map((it) => it.name),
        solutionsUrl: undefined,
        data: {
            all: processContestResults(filterOutWorst(collapseContestData("all"))),
            elementary: processContestResults(filterOutWorst(collapseContestData("elementary"))),
            high: processContestResults(filterOutWorst(collapseContestData("high"))),
            university: processContestResults(filterOutWorst(collapseContestData("university"))),
        },
        color: true,
        finalCall: seasonConfig.finalCall,
    };

    if (ALL_CONTESTS.length > 0) DataByContests["Ukupno"] = totalData;

    if (ALL_CONTESTS.length == seasonConfig.roundCount)
        DataByContests[`Ukupno (${ALL_CONTESTS.length - 1} najbolja)`] = totalDataWithoutWorst;

    return DataByContests;
};
