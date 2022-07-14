import Document from "../../../domain/entities/Document";

const restoreDocument = (data: Document) => {
  return new Document(data);
};

export default restoreDocument;
