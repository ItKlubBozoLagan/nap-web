"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { Category, CATEGORY_LABELS } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { EducationCategory } from "@/lib/contestResults";
import { OneContestData } from "@/components/results-view";
import { Download, FileDownIcon } from "lucide-react";

type Properties = {
    dataByContests: Record<string, OneContestData>;
};

const categoryLabels: Record<Category, string> = {
    all: "Svi",
    university: "Fakulteti",
    high: "Srednje škole",
    elementary: "Osnovne škole",
};

export const TableView: FC<OneContestData> = ({ problems, data, color, finalCall, solutionsUrl }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("all");

    return (
        <>
            <Card className="p-6 border-border/50">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                    {CATEGORY_LABELS.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                            className="min-w-[140px]"
                        >
                            {categoryLabels[category]}
                        </Button>
                    ))}
                    {solutionsUrl && (
                        <Button
                            asChild
                            className="min-w-[140px] bg-blue-700 hover:bg-blue-800 text-white"
                        >
                            <a href={solutionsUrl} download>
                                <Download className="mr-2 h-4 w-4" />
                                Rješenja
                            </a>
                        </Button>
                    )}
                </div>
            </Card>

            <Card className="border-border/50 overflow-hidden p-0">
                <div className="w-full overflow-x-auto">
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow className="bg-primary/10 hover:bg-primary/10">
                                <TableHead className="text-center font-semibold text-foreground w-12 px-2">
                                    #
                                </TableHead>
                                <TableHead className="font-semibold text-foreground min-w-[140px] px-2">
                                    Ime
                                </TableHead>
                                <TableHead className="font-semibold text-foreground min-w-[100px] px-2 hidden sm:table-cell">
                                    Kategorija
                                </TableHead>
                                <TableHead className="font-semibold text-foreground min-w-[140px] px-2 hidden md:table-cell">
                                    Institucija
                                </TableHead>
                                {problems.map((problem) => (
                                    <TableHead
                                        key={problem}
                                        className="text-center font-semibold text-foreground w-16 px-1"
                                    >
                                        <div className="truncate text-xs" title={problem}>
                                            {problem.length > 8
                                                ? problem.substring(0, 8) + "..."
                                                : problem}
                                        </div>
                                    </TableHead>
                                ))}
                                <TableHead className="text-center font-semibold text-foreground w-16 px-2 bg-primary/10">
                                    Σ{/*skibidi sigma*/}
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data[selectedCategory].length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={problems.length + 5}
                                        className="text-center text-muted-foreground py-12"
                                    >
                                        Nema rezultata za odabranu kategoriju
                                    </TableCell>
                                </TableRow>
                            ) : (
                                data[selectedCategory].map((entry, index) => (
                                    <TableRow
                                        key={index}
                                        className="hover:bg-primary/5"
                                        style={{
                                            ...(finalCall &&
                                                index ===
                                                finalCall[selectedCategory as EducationCategory]
                                                ? { borderTop: "2px solid black" }
                                                : {}),
                                            ...(finalCall &&
                                                index < finalCall[selectedCategory as EducationCategory]
                                                ? { backgroundColor: "rgba(0, 255, 0, 0.07)" }
                                                : {}),
                                        }}
                                    >
                                        <TableCell className="text-center font-medium px-2">
                                            {entry.rank}
                                        </TableCell>
                                        <TableCell className="font-medium px-2">
                                            <div
                                                className="truncate max-w-[200px]"
                                                title={entry.full_name}
                                            >
                                                {entry.full_name}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-xs px-2 hidden sm:table-cell">
                                            <div className="truncate">{entry.category}</div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-xs px-2 hidden md:table-cell">
                                            <div
                                                className="truncate max-w-[200px]"
                                                title={entry.institution}
                                            >
                                                {entry.institution}
                                            </div>
                                        </TableCell>
                                        {problems.map((problem) => {
                                            const score = entry.score[problem];
                                            const isNull = score === null;
                                            const cellStyle = color
                                                ? isNull
                                                    ? {
                                                        backgroundColor: "rgba(255, 0, 0, 0.13)",
                                                    }
                                                    : {
                                                        backgroundColor: "rgba(0, 255, 0, 0.13)",
                                                    }
                                                : {};

                                            return (
                                                <TableCell
                                                    key={problem}
                                                    className="text-center font-mono text-sm px-1"
                                                    style={cellStyle}
                                                >
                                                    {score === null || score === undefined ? (
                                                        <span className="text-muted-foreground">
                                                            X
                                                        </span>
                                                    ) : score === 0 ? (
                                                        <span className="text-destructive">0</span>
                                                    ) : (
                                                        <span>{score}</span>
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell className="text-center font-bold text-primary px-2 bg-primary/5">
                                            {entry.total}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </>
    );
};

export const ResultsTable: FC<Properties> = ({ dataByContests }) => {
    const [selectedContest, setSelectedContest] = useState<string>(Object.keys(dataByContests)[0]);

    useEffect(() => {
        setSelectedContest(Object.keys(dataByContests)[0]);
    }, [dataByContests]);

    const {
        problems,
        data: dataByCategory,
        color,
        finalCall,
        solutionsUrl,
    } = useMemo(() => {
        if (selectedContest in dataByContests)
            return dataByContests[selectedContest]

        return dataByContests[Object.keys(dataByContests)[0]];
    }, [dataByContests, selectedContest]);

    return (
        <>
            <Card className="p-6 border-border/50">
                <div className="flex flex-wrap gap-3 justify-center">
                    {Object.keys(dataByContests).map((contest) => (
                        <Button
                            key={contest}
                            variant={selectedContest === contest ? "default" : "outline"}
                            onClick={() => setSelectedContest(contest)}
                            className="min-w-[120px]"
                        >
                            {contest}
                        </Button>
                    ))}
                </div>
            </Card>

            <TableView
                problems={problems}
                data={dataByCategory}
                color={color}
                finalCall={finalCall}
                solutionsUrl={solutionsUrl}
            />
        </>
    );
};
