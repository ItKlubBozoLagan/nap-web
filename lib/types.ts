export interface ContestScore {
    [problemName: string]: number;
}

export interface Participant {
    full_name: string;
    score: ContestScore;
    institution: string;
    category: "elementary" | "high" | "university";
}

export interface ContestRound {
    name: string;
    problems: string[];
    data: Participant[];
}

export interface CombinedContestData {
    problems: string[];
    data: Record<Category, ProcessedParticipant[]>;
    color?: boolean;
    finalCall?: Record<"elementary" | "high" | "university", number>;
}

export const CATEGORY_LABELS = ["all", "elementary", "high", "university"] as const;
export type Category = (typeof CATEGORY_LABELS)[number];

export interface ProcessedParticipant extends Participant {
    total: number;
    rank: number;
}
