export function provide(token: any, config: any): any;
export class NodeXhr {
  build(): any;
}
export class NodeBackend {
  createConnection(request: any): any;
}
export function bootstrap(component: any, providers?: any): any;
export function prebootComplete(value?: any): any;
export function renderToString(AppComponent: any, nodeProviders?: any): Promise<string>;
export function renderToStringWithPreboot(
  AppComponent: any,
  nodeProviders?: any,
  prebootConfig?: any): Promise<string>;
export function appRefSyncRender(appRef: any): string;
export function serializeApplication(element: any, styles: string[], cache?: any): string;
export function selectorResolver(componentType: any): string;
export function stringifyElement(el: any): string;

// TODO(gdi2290): remove
export var SERVER_LOCATION_PROVIDERS: [any];
export var HTTP_PROVIDERS: [any];

export var NODE_LOCATION_PROVIDERS: [any];
export var REQUEST_URL: string;
export function buildBaseUrl(url: string, existing?: boolean): any;
export var NODE_HTTP_PROVIDERS: [any];
export var NODE_PROVIDERS: [any];
export function buildNodeProviders(providers?: Array<any>): Array<any>;
export function buildNodeAppProviders(appComponentType: any, providers?: Array<any>): Array<any>;
export function buildNodePlatformProviders(
  appComponentType: any,
  providers?: Array<any>): Array<any>;
export var NODE_APPLICATION_COMMON_PROVIDERS: [any];
export var NODE_APPLICATION_PROVIDERS: [any];
export function selectorRegExpFactory(selector: string): RegExp;
export function expressEngine(): any;
export function hapiEngine(): any;
export function parseDocument(documentHtml: string): Object;
export function parseFragment(el: string): Object;
export function serializeDocument(document: Object): string;
export function addPrebootHtml(AppComponent: any, html: any, prebootConfig?: any): any;
export function renderDocument(
  documentHtml: string,
  componentType: Function | any,
  nodeProviders?: any): Promise<string>;
export function renderDocumentWithPreboot(
  documentHtml: string,
  componentType: Function | any,
  nodeProviders?: any,
  prebootConfig?: any
): Promise<string>;
export function bootloader(config: any): any;
export function buildReflector(): void;
export function applicationToString(appRef: any): string;
export class Bootloader {
  _config: any;
  static create(config?: any);
  static serializeDocument(doc?: any);
  static parseFragment(doc?: any);
  static parseDocument(doc?: any);
  static appRefToString(apps?: any);
  constructor(config?: any)
  document(document): any;
  platform(providers?: any): any;
  application(document?: any, providers?: any): any;
  bootstrap(Component?: any, componentProviders?: Array<any>): Promise<any>;
  serialize(Component?: any | Array<any>, componentProviders?: Array<any>): Promise<any>;
  serializeApplication(): void;
  dispose(): void;
}

export default {
  applicationToString,
  Bootloader,
  bootloader,
  renderDocumentWithPreboot,
  renderDocument,
  addPrebootHtml,
  serializeDocument,
  parseFragment,
  parseDocument,
  expressEngine,
  hapiEngine,
  provide,
  NodeXhr,
  NodeBackend,
  bootstrap,
  prebootComplete,
  renderToString,
  renderToStringWithPreboot,
  appRefSyncRender,
  serializeApplication,
  selectorResolver,
  stringifyElement,

  SERVER_LOCATION_PROVIDERS,
  NODE_LOCATION_PROVIDERS,
  HTTP_PROVIDERS,


  REQUEST_URL,
  buildBaseUrl,
  NODE_HTTP_PROVIDERS,
  buildReflector,
  buildNodeProviders,
  buildNodeAppProviders,
  buildNodePlatformProviders,
  NODE_PROVIDERS,
  NODE_APPLICATION_COMMON_PROVIDERS,
  NODE_APPLICATION_PROVIDERS,
  selectorRegExpFactory
}
