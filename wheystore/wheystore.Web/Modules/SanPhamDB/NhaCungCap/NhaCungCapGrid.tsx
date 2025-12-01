import { EntityGrid } from '@serenity-is/corelib';
import { NhaCungCapColumns, NhaCungCapRow, NhaCungCapService } from '../../ServerTypes/SanPhamDB';
import { NhaCungCapDialog } from './NhaCungCapDialog';

export class NhaCungCapGrid extends EntityGrid<NhaCungCapRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return NhaCungCapColumns.columnsKey; }
    protected override getDialogType() { return NhaCungCapDialog; }
    protected override getRowDefinition() { return NhaCungCapRow; }
    protected override getService() { return NhaCungCapService.baseUrl; }
}