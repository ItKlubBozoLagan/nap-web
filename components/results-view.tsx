import fg from "fast-glob";
import fs from "fs";
import { ContestData, ContestTableEntry, EducationCategory } from "@/lib/contestResults";
import { dataByContestsFromRaw, Season } from "@/lib/contests";
import { Category } from "@/lib/types";
import { ResultsSelector } from "@/components/results-selector";

export type OneContestData = {
    problems: string[];
    data: Record<Category, ContestTableEntry[]>;
    color?: boolean;
    finalCall?: Record<EducationCategory, number>;
    solutionsUrl?: string;
};

const allResults = Object.fromEntries(
    fg
        .sync("public/data/*/*.json")
        .map((file) => {
            const data = JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
            const zipPath = file.replace(".json", ".zip");
            if (fs.existsSync(zipPath)) {
                data.solutionsUrl = zipPath.replace("public", "");
            }
            return [file, data];
        }),
) as Record<string, ContestData>;

const seasonFolderMap: Record<string, Season> = {
    "2024": "2024/2025",
    "2025": "2025/2026",
};

const byYear = Object.entries(allResults)
    .map(([name, data]) => {
        const year = name.split("/").at(-2)!;

        return [seasonFolderMap[year as keyof typeof seasonFolderMap], data] as const;
    })
    .reduce(
        (acc, [season, data]) => {
            if (!acc[season]) acc[season] = [];

            acc[season].push(data);
            return acc;
        },
        {} as Record<Season, ContestData[]>,
    );

const byYearParsed = Object.fromEntries(
    Object.entries(byYear).map(([name, data]) => [
        name,
        dataByContestsFromRaw(name as Season, data),
    ]),
);

export function ResultsView() {
    return <ResultsSelector byYear={byYearParsed} />;
}
