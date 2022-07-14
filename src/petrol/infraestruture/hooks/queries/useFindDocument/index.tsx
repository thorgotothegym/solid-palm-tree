import { useQuery } from "react-query";
import findDocument from "../../../../domain/useCases/findDocuments";
import Document from "../../../../domain/entities/Document";
import { WebSocketQueryKeys } from "../queryKeys";

const useFindDocument = () => {
  const query = useQuery<Document | undefined, Error>(
    [WebSocketQueryKeys.DOCUMENTS],
    () => {
      return findDocument();
    },
    {
      initialData: undefined,
    },
  );

  return query;
};

export default useFindDocument;
