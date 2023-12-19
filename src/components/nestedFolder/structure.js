const data = {
  name: "root",
  isFolder: true,
  item: [
    {
      name: "public",
      isFolder: true,
      item: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "scr",
      isFolder: true,
      item: [
        {
          name: "component",
          isFolder: true,
          item: [
            {
              name: "compA.js",
              isFolder: false,
            },
            {
              name: "compB.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "app.js",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
      ],
    },
  ],
};

export default data;
