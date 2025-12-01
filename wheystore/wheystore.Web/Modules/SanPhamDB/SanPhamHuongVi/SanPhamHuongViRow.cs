namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamHuongVi")]
[DisplayName("San Pham Huong Vi"), InstanceName("San Pham Huong Vi")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
[LookupScript]
public sealed class SanPhamHuongViRow : Row<SanPhamHuongViRow.RowFields>, IIdRow, INameRow
{
    const string jSanPham = nameof(jSanPham);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"),
     ForeignKey(typeof(SanPhamRow)), LeftJoin("jSanPham"),
     TextualField(nameof(SanPhamTenSp))]
    public int? SanPhamId
    {
        get => fields.SanPhamId[this];
        set => fields.SanPhamId[this] = value;
    }

    [DisplayName("Ten Huong Vi"), Size(100), NotNull, QuickSearch, NameProperty]
    public string TenHuongVi { get => fields.TenHuongVi[this]; set => fields.TenHuongVi[this] = value; }

    [DisplayName("Is Default"), NotNull]
    public bool? IsDefault { get => fields.IsDefault[this]; set => fields.IsDefault[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public StringField TenHuongVi;
        public BooleanField IsDefault;
        public StringField SanPhamTenSp;
    }
}