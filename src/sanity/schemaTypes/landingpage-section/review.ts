// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: "review",
    title: "Review",
    type: "document",
    fields: [
      {
        name: "product",
        title: "Product",
        type: "reference",
        to: [{ type: "product" }], // Yeh product se link hoga
      },
      {
        name: "user",
        title: "User",
        type: "string",
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
      },
      {
        name: "comment",
        title: "Comment",
        type: "text",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
        },
      },
    ],
  };
  