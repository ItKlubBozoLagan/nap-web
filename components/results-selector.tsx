"use client";

import { ResultsTable } from "@/components/results-table";
import { FC, useState } from "react";
import { OneContestData } from "@/components/results-view";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Properties = {
    byYear: Record<string, Record<string, OneContestData>>;
};

export const ResultsSelector: FC<Properties> = ({ byYear }) => {
    const [selectedSeason, setSelectedSeason] = useState(Object.keys(byYear).at(-1)!);

    return (
        <div className="space-y-8">
            <Card className="p-6 border-border/50">
                <div className="flex items-center justify-center gap-4">
                    <label className="text-sm font-medium">Sezona:</label>
                    <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(byYear)
                                .sort((a, b) => b.localeCompare(a))
                                .map((year) => (
                                    <SelectItem key={year} value={year}>
                                        {year}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                </div>
            </Card>
            <ResultsTable dataByContests={byYear[selectedSeason]} />
        </div>
    );
};
