import { EntityDialog } from '@serenity-is/corelib';
import { NhaCungCapForm, NhaCungCapRow, NhaCungCapService } from '../../ServerTypes/SanPhamDB';

export class NhaCungCapDialog extends EntityDialog<NhaCungCapRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return NhaCungCapForm.formKey; }
    protected override getRowDefinition() { return NhaCungCapRow; }
    protected override getService() { return NhaCungCapService.baseUrl; }

    protected form = new NhaCungCapForm(this.idPrefix);
}