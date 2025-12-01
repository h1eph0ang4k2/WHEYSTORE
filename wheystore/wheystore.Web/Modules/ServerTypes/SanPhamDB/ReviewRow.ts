import { fieldsProxy } from "@serenity-is/corelib";

export interface ReviewRow {
    Id?: number;
    SanPhamId?: number;
    KhachHangId?: number;
    UserId?: number;
    Rating?: number;
    TieuDe?: string;
    NoiDung?: string;
    AnhReview?: string;
    DaDuyet?: boolean;
    SoLanHuuIch?: number;
    BiAn?: boolean;
    CreatedAt?: string;
    UpdatedAt?: string;
}

export abstract class ReviewRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'TieuDe';
    static readonly localTextPrefix = 'SanPhamDB.Review';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ReviewRow>();
}