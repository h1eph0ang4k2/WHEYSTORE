import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ThuongHieuRow } from "./ThuongHieuRow";

export interface ThuongHieuColumns {
    Id: Column<ThuongHieuRow>;
    TenThuongHieu: Column<ThuongHieuRow>;
    Slug: Column<ThuongHieuRow>;
    Logo: Column<ThuongHieuRow>;
    MoTa: Column<ThuongHieuRow>;
    ThuTu: Column<ThuongHieuRow>;
    HienThi: Column<ThuongHieuRow>;
    NoiBat: Column<ThuongHieuRow>;
    CreatedAt: Column<ThuongHieuRow>;
    UpdatedAt: Column<ThuongHieuRow>;
}

export class ThuongHieuColumns extends ColumnsBase<ThuongHieuRow> {
    static readonly columnsKey = 'SanPhamDB.ThuongHieu';
    static readonly Fields = fieldsProxy<ThuongHieuColumns>();
}