import { PluginOptions } from 'aomao_engine';

export interface StatusOptions extends PluginOptions {
	hotkey?: string | Array<string>;
	colors?: {
		background: string;
		color: string;
	}[];
}
