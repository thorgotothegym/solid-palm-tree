import getDocument from "../../../infraestruture/repositories/getDocuments";

export default async function findAccount() {
  return await getDocument();
}
