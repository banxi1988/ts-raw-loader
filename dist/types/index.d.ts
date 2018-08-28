/// <reference types="webpack" />
/// <reference types="node" />
import webpack = require("webpack");
export default function rawLoader(this: webpack.loader.LoaderContext, source: string | Buffer): string;
