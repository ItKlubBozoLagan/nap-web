export type EducationCategory = "university" | "high" | "elementary";

const categoryNameMap: Record<string, string> = {
    university: "Fakultet",
    high: "Srednja škola",
    elementary: "Osnovna škola",
};

export type ContestData = {
    name: string;
    problems: string[];
    data: RawContestDataEntry[];
    solutionsUrl?: string; 
};

export type ContestTableEntry = {
    full_name: string;
    category: string;
    institution: string;
    score: Record<string, number | null>;
    total: number;
    rank: number;
};

export type RawContestDataEntry = {
    full_name: string;
    category: string;
    institution: string;
    score: Record<string, number | null>;
};

export const processContestResults = (data: RawContestDataEntry[]): ContestTableEntry[] => {
    const sorted: ContestTableEntry[] = data
        .map((it) => ({
            ...it,
            category: categoryNameMap[it.category] ?? it.category,
            total: Object.values(it.score)
                .map((it) => it ?? 0)
                .reduce((acc, curr) => (acc ?? 0) + (curr ?? 0), 0),
            rank: 0,
        }))
        .sort((a, b) => b.total - a.total);

    const processed: ContestTableEntry[] = [];

    for (let i = 0; i < sorted.length; i++) {
        processed.push({
            ...sorted[i],
            rank:
                i !== 0 && processed[i - 1].total === sorted[i].total
                    ? processed[i - 1].rank
                    : i + 1,
        });
    }

    return processed;
};
