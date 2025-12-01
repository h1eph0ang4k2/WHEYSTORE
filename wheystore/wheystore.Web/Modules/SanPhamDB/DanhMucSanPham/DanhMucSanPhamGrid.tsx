import { EntityGrid } from '@serenity-is/corelib';
import { DanhMucSanPhamColumns, DanhMucSanPhamRow, DanhMucSanPhamService } from '../../ServerTypes/SanPhamDB';
import { DanhMucSanPhamDialog } from './DanhMucSanPhamDialog';

export class DanhMucSanPhamGrid extends EntityGrid<DanhMucSanPhamRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return DanhMucSanPhamColumns.columnsKey; }
    protected override getDialogType() { return DanhMucSanPhamDialog; }
    protected override getRowDefinition() { return DanhMucSanPhamRow; }
    protected override getService() { return DanhMucSanPhamService.baseUrl; }
}