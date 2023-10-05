export interface ScannedData {
	type: string;
	data: string;
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & unknown;
