import { EntityGrid } from '@serenity-is/corelib';
import { KhachHangColumns, KhachHangRow, KhachHangService } from '../../ServerTypes/SanPhamDB';
import { KhachHangDialog } from './KhachHangDialog';

export class KhachHangGrid extends EntityGrid<KhachHangRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return KhachHangColumns.columnsKey; }
    protected override getDialogType() { return KhachHangDialog; }
    protected override getRowDefinition() { return KhachHangRow; }
    protected override getService() { return KhachHangService.baseUrl; }
}