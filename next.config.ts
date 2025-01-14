import withMDX from "@next/mdx";

export default withMDX({})({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
});
