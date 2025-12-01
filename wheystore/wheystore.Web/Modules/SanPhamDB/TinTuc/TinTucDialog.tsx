import { EntityDialog } from '@serenity-is/corelib';
import { TinTucForm, TinTucRow, TinTucService } from '../../ServerTypes/SanPhamDB';

export class TinTucDialog extends EntityDialog<TinTucRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("wheystore.SanPhamDB.");

    protected override getFormKey() { return TinTucForm.formKey; }
    protected override getRowDefinition() { return TinTucRow; }
    protected override getService() { return TinTucService.baseUrl; }

    protected form = new TinTucForm(this.idPrefix);
}