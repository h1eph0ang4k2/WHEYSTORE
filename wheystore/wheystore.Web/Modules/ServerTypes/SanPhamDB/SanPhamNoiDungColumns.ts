import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamNoiDungRow } from "./SanPhamNoiDungRow";

export interface SanPhamNoiDungColumns {
    Id: Column<SanPhamNoiDungRow>;
    SanPhamTenSp: Column<SanPhamNoiDungRow>;
    TieuDe: Column<SanPhamNoiDungRow>;
    LoaiSection: Column<SanPhamNoiDungRow>;
    NoiDungHtml: Column<SanPhamNoiDungRow>;
    ThuTu: Column<SanPhamNoiDungRow>;
}

export class SanPhamNoiDungColumns extends ColumnsBase<SanPhamNoiDungRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamNoiDung';
    static readonly Fields = fieldsProxy<SanPhamNoiDungColumns>();
}