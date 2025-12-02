using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20250212_1425)]
public class DefaultDB_20250212_14254_TinhThanh_QuanHuyen_XaPhuong : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("TinhThanh")
             .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("TenTinhThanh").AsString(200).NotNullable();

        Create.Table("QuanHuyen")
        .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
        .WithColumn("TenQuanHuyen").AsString(200).NotNullable()
         .WithColumn("TinhThanhId").AsInt32().NotNullable()
                .ForeignKey("FK_QuanHuyen_TinhThanh", "TinhThanh", "Id");

        Create.Table("XaPhuong")
             .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
             .WithColumn("TenXaPhuong").AsString(200).NotNullable()
             .WithColumn("QuanHuyenID").AsInt32().NotNullable()
             .ForeignKey("Fk_XaPhuong_QuanHuyen", "QuanHuyen", "ID");
    }
}