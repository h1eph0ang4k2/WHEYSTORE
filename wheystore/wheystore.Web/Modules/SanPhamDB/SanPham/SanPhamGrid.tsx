declare const Serenity: any;

import { EntityGrid } from '@serenity-is/corelib';
import {
    SanPhamColumns,
    SanPhamRow,
    SanPhamService,
    DanhMucSanPhamRow,
    NhaCungCapRow,
    ThuongHieuRow
} from '../../ServerTypes/SanPhamDB';
import { SanPhamDialog } from './SanPhamDialog';
export class SanPhamGrid extends EntityGrid<SanPhamRow> {
    static override[Symbol.typeInfo] = this.registerClass("whey.SanPhamDB.SanPhamGrid");

    protected override getColumnsKey() { return SanPhamColumns.columnsKey; }
    protected override getDialogType() { return SanPhamDialog; }
    protected override getRowDefinition() { return SanPhamRow; }
    protected override getService() { return SanPhamService.baseUrl; }

    protected override getQuickFilters(): any[] {
        const filters = super.getQuickFilters();
        const fld = SanPhamRow.Fields;

        // ---- Danh mục sản phẩm (Category) ----
        filters.push({
            field: fld.MaLoai,
            title: "Danh mục",
            type: Serenity.LookupEditor,
            options: {
                lookupKey: DanhMucSanPhamRow.lookupKey
            }

        });

        // ---- Nhà cung cấp (Supplier) ----
        filters.push({
            field: fld.NhaCungCap,
            title: "Nhà cung cấp",
            type: Serenity.LookupEditor,
            options: {
                lookupKey: NhaCungCapRow.lookupKey
            }
        });


        filters.push({
            field: fld.ThuongHieuId,
            title: "Thương hiệu",
            type: Serenity.LookupEditor,
            options: {
                lookupKey: ThuongHieuRow.lookupKey
            }
        });

        // ---- Giá từ ----
        filters.push({
            field: "GiaBanFrom",
            title: "Giá từ",
            type: Serenity.IntegerEditor,
            handler: h => {
                if (!h.active || h.value == null)
                    return;

                const c = [[fld.GiaBan], '>=', h.value];
                h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, c);
            }
        });

        // ---- Giá đến ----
        filters.push({
            field: "GiaBanTo",
            title: "Giá đến",
            type: Serenity.IntegerEditor,
            handler: h => {
                if (!h.active || h.value == null)
                    return;

                const c = [[fld.GiaBan], '<=', h.value];
                h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, c);
            }
        });

        return filters;
    }

    public override getSlickOptions() {
        const opt = super.getSlickOptions();
        opt.editable = true;
        opt.enableCellNavigation = true;
        return opt;

    }
}
   