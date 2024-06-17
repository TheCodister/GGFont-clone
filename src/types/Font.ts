export default interface Font {
  family: string;
  variants: string[];
  // category: string;
  files: {
    [key: string]: string;
  };
  // version: string;
  // lastModified: string;
  // subsets: string[];
  // kind: string;
}
