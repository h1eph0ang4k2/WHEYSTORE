import { EntityGrid } from '@serenity-is/corelib';
import { SanPhamHuongViLinkColumns, SanPhamHuongViLinkRow, SanPhamHuongViLinkService } from '../../ServerTypes/SanPhamDB';
import { SanPhamHuongViLinkDialog } from './SanPhamHuongViLinkDialog';

export class SanPhamHuongViLinkGrid extends EntityGrid<SanPhamHuongViLinkRow> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getColumnsKey() { return SanPhamHuongViLinkColumns.columnsKey; }
    protected override getDialogType() { return SanPhamHuongViLinkDialog; }
    protected override getRowDefinition() { return SanPhamHuongViLinkRow; }
    protected override getService() { return SanPhamHuongViLinkService.baseUrl; }
}