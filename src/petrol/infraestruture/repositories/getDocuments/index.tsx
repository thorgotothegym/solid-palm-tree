import api from "../../../../common/infraestructure/api";
import Document from "../../../domain/entities/Document";
import restoreDocument from "../../builders/restoreDocument";

const getDocument = async (): Promise<Document> => {
  const documentRequest = await api.get(`/documents`);

  return documentRequest.data.map((item) => restoreDocument(item));
};

export default getDocument;
