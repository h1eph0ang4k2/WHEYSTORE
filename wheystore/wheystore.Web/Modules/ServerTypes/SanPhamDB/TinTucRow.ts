import { fieldsProxy } from "@serenity-is/corelib";

export interface TinTucRow {
    TinTucId?: number;
    DanhMucId?: number;
    TieuDe?: string;
    Slug?: string;
    TomTat?: string;
    AnhBia?: string;
    NoiDungHtml?: string;
    SeoTitle?: string;
    SeoDescription?: string;
    IsPublished?: boolean;
    IsHot?: boolean;
    ViewCount?: number;
    NgayDang?: string;
    NgayCapNhat?: string;
    TacGia?: string;
}

export abstract class TinTucRow {
    static readonly idProperty = 'TinTucId';
    static readonly nameProperty = 'TieuDe';
    static readonly localTextPrefix = 'SanPhamDB.TinTuc';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TinTucRow>();
}