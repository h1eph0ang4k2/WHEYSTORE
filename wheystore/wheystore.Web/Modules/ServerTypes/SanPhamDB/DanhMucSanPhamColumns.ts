import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { DanhMucSanPhamRow } from "./DanhMucSanPhamRow";

export interface DanhMucSanPhamColumns {
    MaLoai: Column<DanhMucSanPhamRow>;
    TenLoai: Column<DanhMucSanPhamRow>;
    MoTa: Column<DanhMucSanPhamRow>;
}

export class DanhMucSanPhamColumns extends ColumnsBase<DanhMucSanPhamRow> {
    static readonly columnsKey = 'SanPhamDB.DanhMucSanPham';
    static readonly Fields = fieldsProxy<DanhMucSanPhamColumns>();
}