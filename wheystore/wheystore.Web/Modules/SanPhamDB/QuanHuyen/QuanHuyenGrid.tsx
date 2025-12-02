import { EntityGrid } from '@serenity-is/corelib';
import { QuanHuyenColumns, QuanHuyenRow, QuanHuyenService } from '../../ServerTypes/SanPhamDB';
import { QuanHuyenDialog } from './QuanHuyenDialog';

export class QuanHuyenGrid extends EntityGrid<QuanHuyenRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return QuanHuyenColumns.columnsKey; }
    protected override getDialogType() { return QuanHuyenDialog; }
    protected override getRowDefinition() { return QuanHuyenRow; }
    protected override getService() { return QuanHuyenService.baseUrl; }
}