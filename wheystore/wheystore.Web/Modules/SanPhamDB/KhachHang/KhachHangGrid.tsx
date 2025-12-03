import { EntityGrid } from '@serenity-is/corelib';
import { KhachHangColumns, KhachHangRow, KhachHangService } from '../../ServerTypes/SanPhamDB';
import { KhachHangDialog } from './KhachHangDialog';

export class KhachHangGrid extends EntityGrid<KhachHangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return KhachHangColumns.columnsKey; }
    protected override getDialogType() { return KhachHangDialog; }
    protected override getRowDefinition() { return KhachHangRow; }
    protected override getService() { return KhachHangService.baseUrl; }

    protected override getQuickFilters() {
        const filters = super.getQuickFilters();

        const tinhThanh = filters.find(x => x.field === "TinhThanhId");
        const quanHuyen = filters.find(x => x.field === "QuanHuyenId");
        const xaPhuong = filters.find(x => x.field === "XaPhuongId");

       
        if (tinhThanh && quanHuyen) {
            quanHuyen.options = {
                ...(quanHuyen.options ?? {}),
                cascadeFrom: "TinhThanhId",
                cascadeField: "TinhThanhId"
            } as any;
        }

       
        if (quanHuyen && xaPhuong) {
            xaPhuong.options = {
                ...(xaPhuong.options ?? {}),
                cascadeFrom: "QuanHuyenId",
                cascadeField: "QuanHuyenId"
            } as any;
        }

        return filters;
    }
}



