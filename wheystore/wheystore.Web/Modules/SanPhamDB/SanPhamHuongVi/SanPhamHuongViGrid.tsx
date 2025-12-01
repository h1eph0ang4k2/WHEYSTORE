import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamHuongViColumns, SanPhamHuongViRow, SanPhamHuongViService } from '../../ServerTypes/SanPhamDB';
import { SanPhamHuongViDialog } from './SanPhamHuongViDialog';

export class SanPhamHuongViGrid extends EntityGrid<SanPhamHuongViRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamHuongViColumns.columnsKey; }
    protected override getDialogType() { return SanPhamHuongViDialog; }
    protected override getRowDefinition() { return SanPhamHuongViRow; }
    protected override getService() { return SanPhamHuongViService.baseUrl; }
}