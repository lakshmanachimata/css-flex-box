import { FileInfo } from "./file-interface";

export interface Deployment {
  Resume: number,
  Catalog: string,
  ModifiedAt : string,
  ArtifactName: string,
  FilePublishStatus : string
  FilePublishError : string,
  AIT : number,
  FileName : string,
  DeploymentID : number,
  MuleOrganizationId : string,
  MuleEnvironmentName : string,
  FileID : number,
  Status : string
  ModifiedAtStr : Date,
}
