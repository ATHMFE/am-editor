import { PluginOptions } from 'aomao_engine';

export interface FileOptions extends PluginOptions {
	onBeforeRender?: (action: 'preview' | 'download', url: string) => string;
}
