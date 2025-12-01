using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1416)]
public class DefaultDB_20251122_1416_SanPhamQuaTang : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("SanPhamQuaTang")
     .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
     .WithColumn("SanPhamId").AsInt32().NotNullable()
     .ForeignKey("FK_SanPhamQuaTang_SanPham", "SanPham", "MaSp")
     .WithColumn("QuaTangId").AsInt32().NotNullable()
     .ForeignKey("FK_SanPhamQuaTang_QuaTang", "QuaTang", "Id")
     .WithColumn("ThuTu").AsInt32().NotNullable().WithDefaultValue(0)
     .WithColumn("IsDefault").AsBoolean().NotNullable().WithDefaultValue(false);
    }
}