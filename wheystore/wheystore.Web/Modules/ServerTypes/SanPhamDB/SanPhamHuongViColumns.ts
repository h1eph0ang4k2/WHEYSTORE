import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamHuongViRow } from "./SanPhamHuongViRow";

export interface SanPhamHuongViColumns {
    Id: Column<SanPhamHuongViRow>;
    TenHuongVi: Column<SanPhamHuongViRow>;
    IsDefault: Column<SanPhamHuongViRow>;
}

export class SanPhamHuongViColumns extends ColumnsBase<SanPhamHuongViRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamHuongVi';
    static readonly Fields = fieldsProxy<SanPhamHuongViColumns>();
}