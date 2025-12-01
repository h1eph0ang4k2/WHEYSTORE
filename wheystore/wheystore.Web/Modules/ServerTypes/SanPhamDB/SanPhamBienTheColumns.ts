import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamBienTheRow } from "./SanPhamBienTheRow";

export interface SanPhamBienTheColumns {
    Id: Column<SanPhamBienTheRow>;
    SanPhamTenSp: Column<SanPhamBienTheRow>;
    TenBienThe: Column<SanPhamBienTheRow>;
    GiaBan: Column<SanPhamBienTheRow>;
    GiaKhuyenMai: Column<SanPhamBienTheRow>;
    SoLuong: Column<SanPhamBienTheRow>;
    IsDefault: Column<SanPhamBienTheRow>;
}

export class SanPhamBienTheColumns extends ColumnsBase<SanPhamBienTheRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamBienThe';
    static readonly Fields = fieldsProxy<SanPhamBienTheColumns>();
}