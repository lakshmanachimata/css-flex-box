import { FileInfo } from "./Fileinfo";

export interface Deployment {
  artifactName: string;
  deploymentId : number;
  ait: number;
  catalog : string;
  organizationId : string;
  environmentName : string;
  resumeCount : string;
  status : string;
  initiatedBy : String;
  initiatedDate : Date;
  resumedBy : string;
  resumedDate : Date;
  fileDetails : FileInfo[];
}
