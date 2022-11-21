import { CreatePublicationDto } from "../dto/create-publication.dto";

export interface PublicationI {
    execute(): Promise<{publication: CreatePublicationDto}>;
}