using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1413)]
public class DefaultDB_20251122_1413_SanPhamNoiDung : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamNoiDung")
    .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
    .WithColumn("SanPhamId").AsInt32().NotNullable()
    .ForeignKey("FK_SanPhamNoiDung_SanPham", "SanPham", "MaSp")
    .WithColumn("TieuDe").AsString(200).NotNullable()  
    .WithColumn("LoaiSection").AsInt32().Nullable()    
    .WithColumn("NoiDungHtml").AsString(int.MaxValue).NotNullable()
    .WithColumn("ThuTu").AsInt32().NotNullable().WithDefaultValue(0);
    }
}