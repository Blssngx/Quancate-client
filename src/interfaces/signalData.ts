export interface ISignalData {
    // length: number;
    // symbol_display: string;
    symbol: string;
    marketDirection: string;
    tradeExecution: string;
    floorPivot: string;
    camarillaPivot: string;
    pivotCorrelation: string;
    goldenPivotZone: string;
    signalQuality: string;
    tradeParameters: {
        entry: number;
        sl: number;
        tp1: number;
        tp2: number;
    };
    camarillaPivotPoints: {
        H5: string;
        H4: string;
        H3: string;
        H2: string;
        H1: string;
        L1: string;
        L2: string;
        L3: string;
        L4: string;
        L5: string;
    };
    floorPivotPoints: {
        R4: string;
        R3: string;
        R2: string;
        R1: string;
        TC: string;
        PP: string;
        BC: string;
        S1: string;
        S2: string;
        S3: string;
        S4: string;
    };
}

export interface IStatsData {
    account: string;
    index: string;
    indexToken: string;
    isLong: boolean;
}
