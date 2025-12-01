namespace wheystore.SanPhamDB;

[ConnectionKey("Default"), Module("SanPhamDB"), TableName("SanPhamHuongViLink")]
[DisplayName("San Pham Huong Vi Link"), InstanceName("San Pham Huong Vi Link")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed class SanPhamHuongViLinkRow : Row<SanPhamHuongViLinkRow.RowFields>, IIdRow
{
    const string jSanPham = nameof(jSanPham);
    const string jHuongVi = nameof(jHuongVi);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("San Pham"), NotNull, ForeignKey(typeof(SanPhamRow)), LeftJoin(jSanPham), TextualField(nameof(SanPhamTenSp))]
    [LookupEditor(typeof(SanPhamRow), Async = true)]
    public int? SanPhamId { get => fields.SanPhamId[this]; set => fields.SanPhamId[this] = value; }

    [DisplayName("Huong Vi"), NotNull, ForeignKey(typeof(SanPhamHuongViRow)), LeftJoin(jHuongVi), TextualField(nameof(HuongViTenHuongVi))]
    [LookupEditor(typeof(SanPhamHuongViRow), Async = true)]
    public int? HuongViId { get => fields.HuongViId[this]; set => fields.HuongViId[this] = value; }

    [DisplayName("San Pham Ten Sp"), Origin(jSanPham, nameof(SanPhamRow.TenSp))]
    public string SanPhamTenSp { get => fields.SanPhamTenSp[this]; set => fields.SanPhamTenSp[this] = value; }

    [DisplayName("Huong Vi Ten Huong Vi"), Origin(jHuongVi, nameof(SanPhamHuongViRow.TenHuongVi))]
    public string HuongViTenHuongVi { get => fields.HuongViTenHuongVi[this]; set => fields.HuongViTenHuongVi[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public Int32Field SanPhamId;
        public Int32Field HuongViId;

        public StringField SanPhamTenSp;
        public StringField HuongViTenHuongVi;
    }
}