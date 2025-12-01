import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { DanhMucTinTucRow } from "./DanhMucTinTucRow";

export interface DanhMucTinTucColumns {
    MaDm: Column<DanhMucTinTucRow>;
    TenDm: Column<DanhMucTinTucRow>;
    Slug: Column<DanhMucTinTucRow>;
    MoTa: Column<DanhMucTinTucRow>;
    ThuTu: Column<DanhMucTinTucRow>;
    HienThi: Column<DanhMucTinTucRow>;
}

export class DanhMucTinTucColumns extends ColumnsBase<DanhMucTinTucRow> {
    static readonly columnsKey = 'SanPhamDB.DanhMucTinTuc';
    static readonly Fields = fieldsProxy<DanhMucTinTucColumns>();
}