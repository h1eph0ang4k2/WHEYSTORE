using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1415)]
public class DefaultDB_20251122_1415_SanPhamBienThe : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamBienThe")
    .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
    .WithColumn("SanPhamId").AsInt32().NotNullable()
        .ForeignKey("FK_SanPhamBienThe_SanPham", "SanPham", "MaSp")
    .WithColumn("TenBienThe").AsString(100).NotNullable()  
    .WithColumn("GiaBan").AsDecimal(18, 0).NotNullable()
    .WithColumn("GiaKhuyenMai").AsDecimal(18, 0).Nullable()
    .WithColumn("SoLuong").AsInt32().NotNullable().WithDefaultValue(0)
    .WithColumn("IsDefault").AsBoolean().NotNullable().WithDefaultValue(false);
    }
}