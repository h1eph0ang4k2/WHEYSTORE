import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SanPhamHuongViLinkRow } from "./SanPhamHuongViLinkRow";

export interface SanPhamHuongViLinkColumns {
    Id: Column<SanPhamHuongViLinkRow>;
    SanPhamTenSp: Column<SanPhamHuongViLinkRow>;
    HuongViTenHuongVi: Column<SanPhamHuongViLinkRow>;
}

export class SanPhamHuongViLinkColumns extends ColumnsBase<SanPhamHuongViLinkRow> {
    static readonly columnsKey = 'SanPhamDB.SanPhamHuongViLink';
    static readonly Fields = fieldsProxy<SanPhamHuongViLinkColumns>();
}