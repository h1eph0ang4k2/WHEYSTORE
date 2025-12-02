import { EntityDialog } from '@serenity-is/corelib';
import { QuanHuyenForm, QuanHuyenRow, QuanHuyenService } from '../../ServerTypes/SanPhamDB';

export class QuanHuyenDialog extends EntityDialog<QuanHuyenRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return QuanHuyenForm.formKey; }
    protected override getRowDefinition() { return QuanHuyenRow; }
    protected override getService() { return QuanHuyenService.baseUrl; }

    protected form = new QuanHuyenForm(this.idPrefix);
}