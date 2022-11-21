import { IsArray, IsDate, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePublicationDto {

    @IsString()
    @MinLength(5)
    title: string;

    @IsString()
    @MinLength(10)
    desc: string;

    @IsString({each: true})
    @IsArray()
    tags: string[];

    @IsString()
    publicationType: string;

    @IsOptional()
    createdAt: Date;

    @IsArray()
    images: ImageDto[];

}

export class ImageDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @MinLength(5)
    image: string;
}
