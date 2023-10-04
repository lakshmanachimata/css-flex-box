import { FileInfo } from "./file-interface";

export interface Deployment {
  artifactName: string;
  deploymentID : number;
  ait: number;
  catalog : string;
  organizationId : string;
  environmentName : string;
  resumeCount : number;
  status : string;
  initiatedBy : String;
  initiatedDate : Date;
  resumedBy : string;
  resumedDate : Date;
  fileDetails : FileInfo[];
}
