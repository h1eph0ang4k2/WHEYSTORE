import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TinTucRow } from "./TinTucRow";

export interface TinTucColumns {
    TinTucId: Column<TinTucRow>;
    DanhMucId: Column<TinTucRow>;
    TieuDe: Column<TinTucRow>;
    Slug: Column<TinTucRow>;
    TomTat: Column<TinTucRow>;
    AnhBia: Column<TinTucRow>;
    NoiDungHtml: Column<TinTucRow>;
    SeoTitle: Column<TinTucRow>;
    SeoDescription: Column<TinTucRow>;
    IsPublished: Column<TinTucRow>;
    IsHot: Column<TinTucRow>;
    ViewCount: Column<TinTucRow>;
    NgayDang: Column<TinTucRow>;
    NgayCapNhat: Column<TinTucRow>;
    TacGia: Column<TinTucRow>;
}

export class TinTucColumns extends ColumnsBase<TinTucRow> {
    static readonly columnsKey = 'SanPhamDB.TinTuc';
    static readonly Fields = fieldsProxy<TinTucColumns>();
}