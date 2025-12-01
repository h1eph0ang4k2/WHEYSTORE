import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamChiTietRow } from "./SanPhamChiTietRow";

export interface SanPhamChiTietColumns {
    Id: Column<SanPhamChiTietRow>;
    SanPhamTenSp: Column<SanPhamChiTietRow>;
    TrongLuongText: Column<SanPhamChiTietRow>;
    SoLanDungMin: Column<SanPhamChiTietRow>;
    SoLanDungMax: Column<SanPhamChiTietRow>;
    HamLuongProtein: Column<SanPhamChiTietRow>;
    Calories: Column<SanPhamChiTietRow>;
    HamLuongBcaa: Column<SanPhamChiTietRow>;
    XuatXu: Column<SanPhamChiTietRow>;
}

export class SanPhamChiTietColumns extends ColumnsBase<SanPhamChiTietRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamChiTiet';
    static readonly Fields = fieldsProxy<SanPhamChiTietColumns>();
}