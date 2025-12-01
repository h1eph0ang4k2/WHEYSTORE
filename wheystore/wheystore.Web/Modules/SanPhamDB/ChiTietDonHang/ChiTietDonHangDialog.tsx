import { EntityDialog } from '@serenity-is/corelib';
import { ChiTietDonHangForm, ChiTietDonHangRow, ChiTietDonHangService } from '../../ServerTypes/SanPhamDB';

export class ChiTietDonHangDialog extends EntityDialog<ChiTietDonHangRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return ChiTietDonHangForm.formKey; }
    protected override getRowDefinition() { return ChiTietDonHangRow; }
    protected override getService() { return ChiTietDonHangService.baseUrl; }

    protected form = new ChiTietDonHangForm(this.idPrefix);
}